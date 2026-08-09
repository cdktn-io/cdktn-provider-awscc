# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.NewCodeguruprofilerProfilingGroup(scope Construct, id *string, config CodeguruprofilerProfilingGroupConfig) CodeguruprofilerProfilingGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions">PutAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration">PutAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions">ResetAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration">ResetAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">ResetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentPermissions` <a name="PutAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions"></a>

```go
func PutAgentPermissions(value CodeguruprofilerProfilingGroupAgentPermissions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---

##### `PutAnomalyDetectionNotificationConfiguration` <a name="PutAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration"></a>

```go
func PutAnomalyDetectionNotificationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAgentPermissions` <a name="ResetAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions"></a>

```go
func ResetAgentPermissions()
```

##### `ResetAnomalyDetectionNotificationConfiguration` <a name="ResetAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration"></a>

```go
func ResetAnomalyDetectionNotificationConfiguration()
```

##### `ResetComputePlatform` <a name="ResetComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```go
func ResetComputePlatform()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions">AgentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration">AnomalyDetectionNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput">AgentPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput">AnomalyDetectionNotificationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">ComputePlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput">ProfilingGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">ComputePlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName">ProfilingGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentPermissions`<sup>Required</sup> <a name="AgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions"></a>

```go
func AgentPermissions() CodeguruprofilerProfilingGroupAgentPermissionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a>

---

##### `AnomalyDetectionNotificationConfiguration`<sup>Required</sup> <a name="AnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration"></a>

```go
func AnomalyDetectionNotificationConfiguration() CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```go
func Tags() CodeguruprofilerProfilingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a>

---

##### `AgentPermissionsInput`<sup>Optional</sup> <a name="AgentPermissionsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput"></a>

```go
func AgentPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `AnomalyDetectionNotificationConfigurationInput`<sup>Optional</sup> <a name="AnomalyDetectionNotificationConfigurationInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput"></a>

```go
func AnomalyDetectionNotificationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ComputePlatformInput`<sup>Optional</sup> <a name="ComputePlatformInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```go
func ComputePlatformInput() *string
```

- *Type:* *string

---

##### `ProfilingGroupNameInput`<sup>Optional</sup> <a name="ProfilingGroupNameInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput"></a>

```go
func ProfilingGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```go
func ComputePlatform() *string
```

- *Type:* *string

---

##### `ProfilingGroupName`<sup>Required</sup> <a name="ProfilingGroupName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName"></a>

```go
func ProfilingGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentPermissions <a name="CodeguruprofilerProfilingGroupAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

&codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroupAgentPermissions {
	Principals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals">Principals</a></code> | <code>*[]*string</code> | The principals for the agent permissions. |

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

The principals for the agent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#principals CodeguruprofilerProfilingGroup#principals}

---

### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

&codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration {
	ChannelId: *string,
	ChannelUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId">ChannelId</a></code> | <code>*string</code> | Unique identifier for each Channel in the notification configuration of a Profiling Group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri">ChannelUri</a></code> | <code>*string</code> | Unique arn of the resource to be used for notifications. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

Unique identifier for each Channel in the notification configuration of a Profiling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#channel_id CodeguruprofilerProfilingGroup#channel_id}

---

##### `ChannelUri`<sup>Optional</sup> <a name="ChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri"></a>

```go
ChannelUri *string
```

- *Type:* *string

Unique arn of the resource to be used for notifications.

We support a valid SNS topic arn as a channel uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#channel_uri CodeguruprofilerProfilingGroup#channel_uri}

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

&codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProfilingGroupName: *string,
	AgentPermissions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions,
	AnomalyDetectionNotificationConfiguration: interface{},
	ComputePlatform: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName">ProfilingGroupName</a></code> | <code>*string</code> | The name of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions">AgentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | The agent permissions attached to this profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration">AnomalyDetectionNotificationConfiguration</a></code> | <code>interface{}</code> | Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">ComputePlatform</a></code> | <code>*string</code> | The compute platform of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with a profiling group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProfilingGroupName`<sup>Required</sup> <a name="ProfilingGroupName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName"></a>

```go
ProfilingGroupName *string
```

- *Type:* *string

The name of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}

---

##### `AgentPermissions`<sup>Optional</sup> <a name="AgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions"></a>

```go
AgentPermissions CodeguruprofilerProfilingGroupAgentPermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

The agent permissions attached to this profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}

---

##### `AnomalyDetectionNotificationConfiguration`<sup>Optional</sup> <a name="AnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration"></a>

```go
AnomalyDetectionNotificationConfiguration interface{}
```

- *Type:* interface{}

Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}

---

##### `ComputePlatform`<sup>Optional</sup> <a name="ComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```go
ComputePlatform *string
```

- *Type:* *string

The compute platform of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with a profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}

---

### CodeguruprofilerProfilingGroupTags <a name="CodeguruprofilerProfilingGroupTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

&codeguruprofilerprofilinggroup.CodeguruprofilerProfilingGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentPermissionsOutputReference <a name="CodeguruprofilerProfilingGroupAgentPermissionsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.NewCodeguruprofilerProfilingGroupAgentPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodeguruprofilerProfilingGroupAgentPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.NewCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get"></a>

```go
func Get(index *f64) CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.NewCodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri">ResetChannelUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetChannelUri` <a name="ResetChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri"></a>

```go
func ResetChannelUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput">ChannelUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri">ChannelUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChannelUriInput`<sup>Optional</sup> <a name="ChannelUriInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput"></a>

```go
func ChannelUriInput() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelUri`<sup>Required</sup> <a name="ChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri"></a>

```go
func ChannelUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodeguruprofilerProfilingGroupTagsList <a name="CodeguruprofilerProfilingGroupTagsList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.NewCodeguruprofilerProfilingGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodeguruprofilerProfilingGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get"></a>

```go
func Get(index *f64) CodeguruprofilerProfilingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodeguruprofilerProfilingGroupTagsOutputReference <a name="CodeguruprofilerProfilingGroupTagsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codeguruprofilerprofilinggroup"

codeguruprofilerprofilinggroup.NewCodeguruprofilerProfilingGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodeguruprofilerProfilingGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



