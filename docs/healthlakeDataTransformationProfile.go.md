# `healthlakeDataTransformationProfile` Submodule <a name="`healthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeDataTransformationProfile <a name="HealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfile(scope Construct, id *string, config HealthlakeDataTransformationProfileConfig) HealthlakeDataTransformationProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig">HealthlakeDataTransformationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig">HealthlakeDataTransformationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription">ResetProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource"></a>

```go
func PutSource(value HealthlakeDataTransformationProfileSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetProfileDescription` <a name="ResetProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription"></a>

```go
func ResetProfileDescription()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.HealthlakeDataTransformationProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.HealthlakeDataTransformationProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.HealthlakeDataTransformationProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.HealthlakeDataTransformationProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HealthlakeDataTransformationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat">TargetFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput">ProfileDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput">SourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription">ProfileDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source"></a>

```go
func Source() HealthlakeDataTransformationProfileSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags"></a>

```go
func Tags() HealthlakeDataTransformationProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a>

---

##### `TargetFormat`<sup>Required</sup> <a name="TargetFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat"></a>

```go
func TargetFormat() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ProfileDescriptionInput`<sup>Optional</sup> <a name="ProfileDescriptionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput"></a>

```go
func ProfileDescriptionInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `SourceFormatInput`<sup>Optional</sup> <a name="SourceFormatInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput"></a>

```go
func SourceFormatInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription"></a>

```go
func ProfileDescription() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat"></a>

```go
func SourceFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeDataTransformationProfileConfig <a name="HealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

&healthlakedatatransformationprofile.HealthlakeDataTransformationProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProfileName: *string,
	SourceFormat: *string,
	KmsKeyId: *string,
	ProfileDescription: *string,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | The human-readable name of the profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat">SourceFormat</a></code> | <code>*string</code> | The source format that this profile converts from. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription">ProfileDescription</a></code> | <code>*string</code> | A human-readable description of the profile's purpose. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | The source from which to create the profile's initial template content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

The human-readable name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_name HealthlakeDataTransformationProfile#profile_name}

---

##### `SourceFormat`<sup>Required</sup> <a name="SourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat"></a>

```go
SourceFormat *string
```

- *Type:* *string

The source format that this profile converts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source_format HealthlakeDataTransformationProfile#source_format}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest.

If omitted, an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#kms_key_id HealthlakeDataTransformationProfile#kms_key_id}

---

##### `ProfileDescription`<sup>Optional</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription"></a>

```go
ProfileDescription *string
```

- *Type:* *string

A human-readable description of the profile's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_description HealthlakeDataTransformationProfile#profile_description}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source"></a>

```go
Source HealthlakeDataTransformationProfileSource
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

The source from which to create the profile's initial template content.

Exactly one of the members must be specified. Use StarterProfile (C-CDA only), ProfileMapping (C-CDA or CSV), or ExistingVersionedProfileId to clone an existing profile. Each produces a published profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source HealthlakeDataTransformationProfile#source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#tags HealthlakeDataTransformationProfile#tags}

---

### HealthlakeDataTransformationProfileSource <a name="HealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

&healthlakedatatransformationprofile.HealthlakeDataTransformationProfileSource {
	ExistingVersionedProfileId: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId,
	ProfileMapping: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping,
	StarterProfile: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId">ExistingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | Create the profile by cloning a specific version of an existing profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping">ProfileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | Create the profile from raw Velocity template mapping content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile">StarterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | Create the profile from a predefined starter profile of transformation templates. |

---

##### `ExistingVersionedProfileId`<sup>Optional</sup> <a name="ExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId"></a>

```go
ExistingVersionedProfileId HealthlakeDataTransformationProfileSourceExistingVersionedProfileId
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

Create the profile by cloning a specific version of an existing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#existing_versioned_profile_id HealthlakeDataTransformationProfile#existing_versioned_profile_id}

---

##### `ProfileMapping`<sup>Optional</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping"></a>

```go
ProfileMapping HealthlakeDataTransformationProfileSourceProfileMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

Create the profile from raw Velocity template mapping content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

##### `StarterProfile`<sup>Optional</sup> <a name="StarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile"></a>

```go
StarterProfile HealthlakeDataTransformationProfileSourceStarterProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

Create the profile from a predefined starter profile of transformation templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#starter_profile HealthlakeDataTransformationProfile#starter_profile}

---

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

&healthlakedatatransformationprofile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId {
	ProfileId: *string,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId">ProfileId</a></code> | <code>*string</code> | The unique identifier of the source profile to clone. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version">Version</a></code> | <code>*f64</code> | The version number of the source profile to clone. |

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

The unique identifier of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_id HealthlakeDataTransformationProfile#profile_id}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

The version number of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#version HealthlakeDataTransformationProfile#version}

---

### HealthlakeDataTransformationProfileSourceProfileMapping <a name="HealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

&healthlakedatatransformationprofile.HealthlakeDataTransformationProfileSourceProfileMapping {
	ProfileMapping: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping">ProfileMapping</a></code> | <code>*map[string]*string</code> | Map of template file paths to their Velocity template content. |

---

##### `ProfileMapping`<sup>Optional</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping"></a>

```go
ProfileMapping *map[string]*string
```

- *Type:* *map[string]*string

Map of template file paths to their Velocity template content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

### HealthlakeDataTransformationProfileSourceStarterProfile <a name="HealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

&healthlakedatatransformationprofile.HealthlakeDataTransformationProfileSourceStarterProfile {
	StarterProfileName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName">StarterProfileName</a></code> | <code>*string</code> | The name of the starter profile to seed the profile from. |

---

##### `StarterProfileName`<sup>Optional</sup> <a name="StarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName"></a>

```go
StarterProfileName *string
```

- *Type:* *string

The name of the starter profile to seed the profile from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#starter_profile_name HealthlakeDataTransformationProfile#starter_profile_name}

---

### HealthlakeDataTransformationProfileTags <a name="HealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

&healthlakedatatransformationprofile.HealthlakeDataTransformationProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#key HealthlakeDataTransformationProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#value HealthlakeDataTransformationProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId"></a>

```go
func ResetProfileId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthlakeDataTransformationProfileSourceOutputReference <a name="HealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfileSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthlakeDataTransformationProfileSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId">PutExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping">PutProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile">PutStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId">ResetExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping">ResetProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile">ResetStarterProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExistingVersionedProfileId` <a name="PutExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId"></a>

```go
func PutExistingVersionedProfileId(value HealthlakeDataTransformationProfileSourceExistingVersionedProfileId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `PutProfileMapping` <a name="PutProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping"></a>

```go
func PutProfileMapping(value HealthlakeDataTransformationProfileSourceProfileMapping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `PutStarterProfile` <a name="PutStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile"></a>

```go
func PutStarterProfile(value HealthlakeDataTransformationProfileSourceStarterProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `ResetExistingVersionedProfileId` <a name="ResetExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId"></a>

```go
func ResetExistingVersionedProfileId()
```

##### `ResetProfileMapping` <a name="ResetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping"></a>

```go
func ResetProfileMapping()
```

##### `ResetStarterProfile` <a name="ResetStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile"></a>

```go
func ResetStarterProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">ExistingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">ProfileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">StarterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput">ExistingVersionedProfileIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput">ProfileMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput">StarterProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExistingVersionedProfileId`<sup>Required</sup> <a name="ExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```go
func ExistingVersionedProfileId() HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```go
func ProfileMapping() HealthlakeDataTransformationProfileSourceProfileMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `StarterProfile`<sup>Required</sup> <a name="StarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```go
func StarterProfile() HealthlakeDataTransformationProfileSourceStarterProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `ExistingVersionedProfileIdInput`<sup>Optional</sup> <a name="ExistingVersionedProfileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput"></a>

```go
func ExistingVersionedProfileIdInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileMappingInput`<sup>Optional</sup> <a name="ProfileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput"></a>

```go
func ProfileMappingInput() interface{}
```

- *Type:* interface{}

---

##### `StarterProfileInput`<sup>Optional</sup> <a name="StarterProfileInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput"></a>

```go
func StarterProfileInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="HealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfileSourceProfileMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthlakeDataTransformationProfileSourceProfileMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping">ResetProfileMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfileMapping` <a name="ResetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping"></a>

```go
func ResetProfileMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput">ProfileMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">ProfileMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProfileMappingInput`<sup>Optional</sup> <a name="ProfileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput"></a>

```go
func ProfileMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProfileMapping`<sup>Required</sup> <a name="ProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```go
func ProfileMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="HealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfileSourceStarterProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthlakeDataTransformationProfileSourceStarterProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName">ResetStarterProfileName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStarterProfileName` <a name="ResetStarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName"></a>

```go
func ResetStarterProfileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput">StarterProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">StarterProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StarterProfileNameInput`<sup>Optional</sup> <a name="StarterProfileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput"></a>

```go
func StarterProfileNameInput() *string
```

- *Type:* *string

---

##### `StarterProfileName`<sup>Required</sup> <a name="StarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```go
func StarterProfileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthlakeDataTransformationProfileTagsList <a name="HealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HealthlakeDataTransformationProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get"></a>

```go
func Get(index *f64) HealthlakeDataTransformationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthlakeDataTransformationProfileTagsOutputReference <a name="HealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/healthlakedatatransformationprofile"

healthlakedatatransformationprofile.NewHealthlakeDataTransformationProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HealthlakeDataTransformationProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



