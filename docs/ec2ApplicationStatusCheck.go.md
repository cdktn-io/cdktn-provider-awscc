# `ec2ApplicationStatusCheck` Submodule <a name="`ec2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ApplicationStatusCheck <a name="Ec2ApplicationStatusCheck" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheck(scope Construct, id *string, config Ec2ApplicationStatusCheckConfig) Ec2ApplicationStatusCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig">Ec2ApplicationStatusCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig">Ec2ApplicationStatusCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths">PutHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths">ResetHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds">ResetInitializationGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope">ResetIpScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher">ResetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheckPaths` <a name="PutHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths"></a>

```go
func PutHealthCheckPaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex"></a>

```go
func ResetDeviceIndex()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetHealthCheckPaths` <a name="ResetHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths"></a>

```go
func ResetHealthCheckPaths()
```

##### `ResetInitializationGracePeriodSeconds` <a name="ResetInitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds"></a>

```go
func ResetInitializationGracePeriodSeconds()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetIpScope` <a name="ResetIpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope"></a>

```go
func ResetIpScope()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion"></a>

```go
func ResetIpVersion()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath"></a>

```go
func ResetPath()
```

##### `ResetStatusCodeMatcher` <a name="ResetStatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher"></a>

```go
func ResetStatusCodeMatcher()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold"></a>

```go
func ResetSuccessThreshold()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout"></a>

```go
func ResetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.Ec2ApplicationStatusCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.Ec2ApplicationStatusCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.Ec2ApplicationStatusCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.Ec2ApplicationStatusCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2ApplicationStatusCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId">ApplicationStatusCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths">HealthCheckPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput">HealthCheckPathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput">InitializationGracePeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput">IpScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput">IpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput">StatusCodeMatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds">InitializationGracePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope">IpScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationStatusCheckId`<sup>Required</sup> <a name="ApplicationStatusCheckId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```go
func ApplicationStatusCheckId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `HealthCheckPaths`<sup>Required</sup> <a name="HealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths"></a>

```go
func HealthCheckPaths() Ec2ApplicationStatusCheckHealthCheckPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags"></a>

```go
func Tags() Ec2ApplicationStatusCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a>

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *f64
```

- *Type:* *f64

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckPathsInput`<sup>Optional</sup> <a name="HealthCheckPathsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput"></a>

```go
func HealthCheckPathsInput() interface{}
```

- *Type:* interface{}

---

##### `InitializationGracePeriodSecondsInput`<sup>Optional</sup> <a name="InitializationGracePeriodSecondsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput"></a>

```go
func InitializationGracePeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `IpScopeInput`<sup>Optional</sup> <a name="IpScopeInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput"></a>

```go
func IpScopeInput() *string
```

- *Type:* *string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput"></a>

```go
func IpVersionInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `StatusCodeMatcherInput`<sup>Optional</sup> <a name="StatusCodeMatcherInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput"></a>

```go
func StatusCodeMatcherInput() *string
```

- *Type:* *string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput"></a>

```go
func SuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex"></a>

```go
func DeviceIndex() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitializationGracePeriodSeconds`<sup>Required</sup> <a name="InitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```go
func InitializationGracePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `IpScope`<sup>Required</sup> <a name="IpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope"></a>

```go
func IpScope() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `StatusCodeMatcher`<sup>Required</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```go
func StatusCodeMatcher() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ApplicationStatusCheckConfig <a name="Ec2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

&ec2applicationstatuscheck.Ec2ApplicationStatusCheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Port: *f64,
	Protocol: *string,
	Aggregation: *string,
	DeviceIndex: *f64,
	FailureThreshold: *f64,
	HealthCheckPaths: interface{},
	InitializationGracePeriodSeconds: *f64,
	Interval: *f64,
	IpScope: *string,
	IpVersion: *string,
	Path: *string,
	StatusCodeMatcher: *string,
	SuccessThreshold: *f64,
	Tags: interface{},
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port">Port</a></code> | <code>*f64</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation">Aggregation</a></code> | <code>*string</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex">DeviceIndex</a></code> | <code>*f64</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths">HealthCheckPaths</a></code> | <code>interface{}</code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds">InitializationGracePeriodSeconds</a></code> | <code>*f64</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval">Interval</a></code> | <code>*f64</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope">IpScope</a></code> | <code>*string</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion">IpVersion</a></code> | <code>*string</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path">Path</a></code> | <code>*string</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>*string</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | The timeout, in seconds, for each health check probe. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex"></a>

```go
DeviceIndex *f64
```

- *Type:* *f64

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `HealthCheckPaths`<sup>Optional</sup> <a name="HealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths"></a>

```go
HealthCheckPaths interface{}
```

- *Type:* interface{}

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `InitializationGracePeriodSeconds`<sup>Optional</sup> <a name="InitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds"></a>

```go
InitializationGracePeriodSeconds *f64
```

- *Type:* *f64

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `IpScope`<sup>Optional</sup> <a name="IpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope"></a>

```go
IpScope *string
```

- *Type:* *string

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion"></a>

```go
IpVersion *string
```

- *Type:* *string

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `StatusCodeMatcher`<sup>Optional</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher"></a>

```go
StatusCodeMatcher *string
```

- *Type:* *string

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold"></a>

```go
SuccessThreshold *f64
```

- *Type:* *f64

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

### Ec2ApplicationStatusCheckHealthCheckPaths <a name="Ec2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

&ec2applicationstatuscheck.Ec2ApplicationStatusCheckHealthCheckPaths {
	Destinations: interface{},
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations">Destinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source"></a>

```go
Source Ec2ApplicationStatusCheckHealthCheckPathsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsDestinations <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

&ec2applicationstatuscheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations {
	SecurityGroupId: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsSource <a name="Ec2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

&ec2applicationstatuscheck.Ec2ApplicationStatusCheckHealthCheckPathsSource {
	SecurityGroupId: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckTags <a name="Ec2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

&ec2applicationstatuscheck.Ec2ApplicationStatusCheckTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckHealthCheckPathsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```go
func Get(index *f64) Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId"></a>

```go
func ResetSecurityGroupId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ApplicationStatusCheckHealthCheckPathsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckHealthCheckPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2ApplicationStatusCheckHealthCheckPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```go
func Get(index *f64) Ec2ApplicationStatusCheckHealthCheckPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckHealthCheckPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2ApplicationStatusCheckHealthCheckPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource"></a>

```go
func PutSource(value Ec2ApplicationStatusCheckHealthCheckPathsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```go
func Destinations() Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```go
func Source() Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId"></a>

```go
func ResetSecurityGroupId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ApplicationStatusCheckTagsList <a name="Ec2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2ApplicationStatusCheckTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get"></a>

```go
func Get(index *f64) Ec2ApplicationStatusCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2ApplicationStatusCheckTagsOutputReference <a name="Ec2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2applicationstatuscheck"

ec2applicationstatuscheck.NewEc2ApplicationStatusCheckTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2ApplicationStatusCheckTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



