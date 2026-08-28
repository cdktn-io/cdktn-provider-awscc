# `groundstationMissionProfile` Submodule <a name="`groundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.groundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationMissionProfile <a name="GroundstationMissionProfile" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.NewGroundstationMissionProfile(scope Construct, id *string, config GroundstationMissionProfileConfig) GroundstationMissionProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig">GroundstationMissionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig">GroundstationMissionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges">PutDataflowEdges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey">PutStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds">ResetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds">ResetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey">ResetStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole">ResetStreamsKmsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn">ResetTelemetrySinkConfigArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataflowEdges` <a name="PutDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges"></a>

```go
func PutDataflowEdges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStreamsKmsKey` <a name="PutStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey"></a>

```go
func PutStreamsKmsKey(value GroundstationMissionProfileStreamsKmsKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContactPostPassDurationSeconds` <a name="ResetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds"></a>

```go
func ResetContactPostPassDurationSeconds()
```

##### `ResetContactPrePassDurationSeconds` <a name="ResetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds"></a>

```go
func ResetContactPrePassDurationSeconds()
```

##### `ResetStreamsKmsKey` <a name="ResetStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey"></a>

```go
func ResetStreamsKmsKey()
```

##### `ResetStreamsKmsRole` <a name="ResetStreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole"></a>

```go
func ResetStreamsKmsRole()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTelemetrySinkConfigArn` <a name="ResetTelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn"></a>

```go
func ResetTelemetrySinkConfigArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.GroundstationMissionProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.GroundstationMissionProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.GroundstationMissionProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.GroundstationMissionProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroundstationMissionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges">DataflowEdges</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId">MissionProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey">StreamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput">ContactPostPassDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput">ContactPrePassDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput">DataflowEdgesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput">MinimumViableContactDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput">StreamsKmsKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput">StreamsKmsRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput">TelemetrySinkConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput">TrackingConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds">MinimumViableContactDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole">StreamsKmsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn">TelemetrySinkConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn">TrackingConfigArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataflowEdges`<sup>Required</sup> <a name="DataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges"></a>

```go
func DataflowEdges() GroundstationMissionProfileDataflowEdgesList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MissionProfileId`<sup>Required</sup> <a name="MissionProfileId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId"></a>

```go
func MissionProfileId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StreamsKmsKey`<sup>Required</sup> <a name="StreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey"></a>

```go
func StreamsKmsKey() GroundstationMissionProfileStreamsKmsKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags"></a>

```go
func Tags() GroundstationMissionProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a>

---

##### `ContactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput"></a>

```go
func ContactPostPassDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput"></a>

```go
func ContactPrePassDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `DataflowEdgesInput`<sup>Optional</sup> <a name="DataflowEdgesInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput"></a>

```go
func DataflowEdgesInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumViableContactDurationSecondsInput`<sup>Optional</sup> <a name="MinimumViableContactDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput"></a>

```go
func MinimumViableContactDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StreamsKmsKeyInput`<sup>Optional</sup> <a name="StreamsKmsKeyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput"></a>

```go
func StreamsKmsKeyInput() interface{}
```

- *Type:* interface{}

---

##### `StreamsKmsRoleInput`<sup>Optional</sup> <a name="StreamsKmsRoleInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput"></a>

```go
func StreamsKmsRoleInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TelemetrySinkConfigArnInput`<sup>Optional</sup> <a name="TelemetrySinkConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput"></a>

```go
func TelemetrySinkConfigArnInput() *string
```

- *Type:* *string

---

##### `TrackingConfigArnInput`<sup>Optional</sup> <a name="TrackingConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput"></a>

```go
func TrackingConfigArnInput() *string
```

- *Type:* *string

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```go
func ContactPostPassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```go
func ContactPrePassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `MinimumViableContactDurationSeconds`<sup>Required</sup> <a name="MinimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```go
func MinimumViableContactDurationSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StreamsKmsRole`<sup>Required</sup> <a name="StreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole"></a>

```go
func StreamsKmsRole() *string
```

- *Type:* *string

---

##### `TelemetrySinkConfigArn`<sup>Required</sup> <a name="TelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```go
func TelemetrySinkConfigArn() *string
```

- *Type:* *string

---

##### `TrackingConfigArn`<sup>Required</sup> <a name="TrackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn"></a>

```go
func TrackingConfigArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationMissionProfileConfig <a name="GroundstationMissionProfileConfig" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

&groundstationmissionprofile.GroundstationMissionProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataflowEdges: interface{},
	MinimumViableContactDurationSeconds: *f64,
	Name: *string,
	TrackingConfigArn: *string,
	ContactPostPassDurationSeconds: *f64,
	ContactPrePassDurationSeconds: *f64,
	StreamsKmsKey: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey,
	StreamsKmsRole: *string,
	Tags: interface{},
	TelemetrySinkConfigArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges">DataflowEdges</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds">MinimumViableContactDurationSeconds</a></code> | <code>*f64</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name">Name</a></code> | <code>*string</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn">TrackingConfigArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey">StreamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole">StreamsKmsRole</a></code> | <code>*string</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn">TelemetrySinkConfigArn</a></code> | <code>*string</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataflowEdges`<sup>Required</sup> <a name="DataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges"></a>

```go
DataflowEdges interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `MinimumViableContactDurationSeconds`<sup>Required</sup> <a name="MinimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds"></a>

```go
MinimumViableContactDurationSeconds *f64
```

- *Type:* *f64

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `TrackingConfigArn`<sup>Required</sup> <a name="TrackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn"></a>

```go
TrackingConfigArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `ContactPostPassDurationSeconds`<sup>Optional</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds"></a>

```go
ContactPostPassDurationSeconds *f64
```

- *Type:* *f64

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `ContactPrePassDurationSeconds`<sup>Optional</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds"></a>

```go
ContactPrePassDurationSeconds *f64
```

- *Type:* *f64

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `StreamsKmsKey`<sup>Optional</sup> <a name="StreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey"></a>

```go
StreamsKmsKey GroundstationMissionProfileStreamsKmsKey
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `StreamsKmsRole`<sup>Optional</sup> <a name="StreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole"></a>

```go
StreamsKmsRole *string
```

- *Type:* *string

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `TelemetrySinkConfigArn`<sup>Optional</sup> <a name="TelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn"></a>

```go
TelemetrySinkConfigArn *string
```

- *Type:* *string

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

### GroundstationMissionProfileDataflowEdges <a name="GroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

&groundstationmissionprofile.GroundstationMissionProfileDataflowEdges {
	Destination: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}.

---

### GroundstationMissionProfileStreamsKmsKey <a name="GroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

&groundstationmissionprofile.GroundstationMissionProfileStreamsKmsKey {
	KmsAliasArn: *string,
	KmsAliasName: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn">KmsAliasArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName">KmsAliasName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}. |

---

##### `KmsAliasArn`<sup>Optional</sup> <a name="KmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn"></a>

```go
KmsAliasArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}.

---

##### `KmsAliasName`<sup>Optional</sup> <a name="KmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName"></a>

```go
KmsAliasName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}.

---

### GroundstationMissionProfileTags <a name="GroundstationMissionProfileTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

&groundstationmissionprofile.GroundstationMissionProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationMissionProfileDataflowEdgesList <a name="GroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.NewGroundstationMissionProfileDataflowEdgesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationMissionProfileDataflowEdgesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get"></a>

```go
func Get(index *f64) GroundstationMissionProfileDataflowEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationMissionProfileDataflowEdgesOutputReference <a name="GroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.NewGroundstationMissionProfileDataflowEdgesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationMissionProfileDataflowEdgesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationMissionProfileStreamsKmsKeyOutputReference <a name="GroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.NewGroundstationMissionProfileStreamsKmsKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationMissionProfileStreamsKmsKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn">ResetKmsAliasArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName">ResetKmsAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsAliasArn` <a name="ResetKmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn"></a>

```go
func ResetKmsAliasArn()
```

##### `ResetKmsAliasName` <a name="ResetKmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName"></a>

```go
func ResetKmsAliasName()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput">KmsAliasArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput">KmsAliasNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">KmsAliasArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">KmsAliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsAliasArnInput`<sup>Optional</sup> <a name="KmsAliasArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput"></a>

```go
func KmsAliasArnInput() *string
```

- *Type:* *string

---

##### `KmsAliasNameInput`<sup>Optional</sup> <a name="KmsAliasNameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput"></a>

```go
func KmsAliasNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsAliasArn`<sup>Required</sup> <a name="KmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```go
func KmsAliasArn() *string
```

- *Type:* *string

---

##### `KmsAliasName`<sup>Required</sup> <a name="KmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```go
func KmsAliasName() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationMissionProfileTagsList <a name="GroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.NewGroundstationMissionProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationMissionProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get"></a>

```go
func Get(index *f64) GroundstationMissionProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationMissionProfileTagsOutputReference <a name="GroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationmissionprofile"

groundstationmissionprofile.NewGroundstationMissionProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationMissionProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



