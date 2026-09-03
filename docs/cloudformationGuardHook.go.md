# `cloudformationGuardHook` Submodule <a name="`cloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.cloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGuardHook <a name="CloudformationGuardHook" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHook(scope Construct, id *string, config CloudformationGuardHookConfig) CloudformationGuardHook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig">CloudformationGuardHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig">CloudformationGuardHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation">PutRuleLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters">PutStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters">PutTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode">ResetFailureMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus">ResetHookStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket">ResetLogBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters">ResetStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters">ResetTargetFilters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions"></a>

```go
func PutOptions(value CloudformationGuardHookOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---

##### `PutRuleLocation` <a name="PutRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation"></a>

```go
func PutRuleLocation(value CloudformationGuardHookRuleLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---

##### `PutStackFilters` <a name="PutStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters"></a>

```go
func PutStackFilters(value CloudformationGuardHookStackFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---

##### `PutTargetFilters` <a name="PutTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters"></a>

```go
func PutTargetFilters(value CloudformationGuardHookTargetFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---

##### `ResetFailureMode` <a name="ResetFailureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode"></a>

```go
func ResetFailureMode()
```

##### `ResetHookStatus` <a name="ResetHookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus"></a>

```go
func ResetHookStatus()
```

##### `ResetLogBucket` <a name="ResetLogBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket"></a>

```go
func ResetLogBucket()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetStackFilters` <a name="ResetStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters"></a>

```go
func ResetStackFilters()
```

##### `ResetTargetFilters` <a name="ResetTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters"></a>

```go
func ResetTargetFilters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.CloudformationGuardHook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.CloudformationGuardHook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.CloudformationGuardHook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.CloudformationGuardHook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationGuardHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn">HookArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation">RuleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters">StackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters">TargetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput">FailureModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput">HookStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput">LogBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput">RuleLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput">StackFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput">TargetFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput">TargetOperationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode">FailureMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus">HookStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket">LogBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations">TargetOperations</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HookArn`<sup>Required</sup> <a name="HookArn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn"></a>

```go
func HookArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options"></a>

```go
func Options() CloudformationGuardHookOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a>

---

##### `RuleLocation`<sup>Required</sup> <a name="RuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation"></a>

```go
func RuleLocation() CloudformationGuardHookRuleLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a>

---

##### `StackFilters`<sup>Required</sup> <a name="StackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters"></a>

```go
func StackFilters() CloudformationGuardHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a>

---

##### `TargetFilters`<sup>Required</sup> <a name="TargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters"></a>

```go
func TargetFilters() CloudformationGuardHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `FailureModeInput`<sup>Optional</sup> <a name="FailureModeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput"></a>

```go
func FailureModeInput() *string
```

- *Type:* *string

---

##### `HookStatusInput`<sup>Optional</sup> <a name="HookStatusInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput"></a>

```go
func HookStatusInput() *string
```

- *Type:* *string

---

##### `LogBucketInput`<sup>Optional</sup> <a name="LogBucketInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput"></a>

```go
func LogBucketInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `RuleLocationInput`<sup>Optional</sup> <a name="RuleLocationInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput"></a>

```go
func RuleLocationInput() interface{}
```

- *Type:* interface{}

---

##### `StackFiltersInput`<sup>Optional</sup> <a name="StackFiltersInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput"></a>

```go
func StackFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `TargetFiltersInput`<sup>Optional</sup> <a name="TargetFiltersInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput"></a>

```go
func TargetFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `TargetOperationsInput`<sup>Optional</sup> <a name="TargetOperationsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput"></a>

```go
func TargetOperationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `FailureMode`<sup>Required</sup> <a name="FailureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode"></a>

```go
func FailureMode() *string
```

- *Type:* *string

---

##### `HookStatus`<sup>Required</sup> <a name="HookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus"></a>

```go
func HookStatus() *string
```

- *Type:* *string

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket"></a>

```go
func LogBucket() *string
```

- *Type:* *string

---

##### `TargetOperations`<sup>Required</sup> <a name="TargetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations"></a>

```go
func TargetOperations() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGuardHookConfig <a name="CloudformationGuardHookConfig" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Alias: *string,
	ExecutionRole: *string,
	RuleLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation,
	TargetOperations: *[]*string,
	FailureMode: *string,
	HookStatus: *string,
	LogBucket: *string,
	Options: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGuardHook.CloudformationGuardHookOptions,
	StackFilters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters,
	TargetFilters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias">Alias</a></code> | <code>*string</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation">RuleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | S3 Source Location for the Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations">TargetOperations</a></code> | <code>*[]*string</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode">FailureMode</a></code> | <code>*string</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus">HookStatus</a></code> | <code>*string</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket">LogBucket</a></code> | <code>*string</code> | S3 Bucket where the guard validate report will be uploaded to. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters">StackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters">TargetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}

---

##### `RuleLocation`<sup>Required</sup> <a name="RuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation"></a>

```go
RuleLocation CloudformationGuardHookRuleLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

S3 Source Location for the Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}

---

##### `TargetOperations`<sup>Required</sup> <a name="TargetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations"></a>

```go
TargetOperations *[]*string
```

- *Type:* *[]*string

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}

---

##### `FailureMode`<sup>Optional</sup> <a name="FailureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode"></a>

```go
FailureMode *string
```

- *Type:* *string

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}

---

##### `HookStatus`<sup>Optional</sup> <a name="HookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus"></a>

```go
HookStatus *string
```

- *Type:* *string

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}

---

##### `LogBucket`<sup>Optional</sup> <a name="LogBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket"></a>

```go
LogBucket *string
```

- *Type:* *string

S3 Bucket where the guard validate report will be uploaded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options"></a>

```go
Options CloudformationGuardHookOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}.

---

##### `StackFilters`<sup>Optional</sup> <a name="StackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters"></a>

```go
StackFilters CloudformationGuardHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}

---

##### `TargetFilters`<sup>Optional</sup> <a name="TargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters"></a>

```go
TargetFilters CloudformationGuardHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}

---

### CloudformationGuardHookOptions <a name="CloudformationGuardHookOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookOptions {
	InputParams: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams">InputParams</a></code> | <code>*string</code> | Specifies the S3 location of input parameter files for your Guard rules. |

---

##### `InputParams`<sup>Optional</sup> <a name="InputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams"></a>

```go
InputParams *string
```

- *Type:* *string

Specifies the S3 location of input parameter files for your Guard rules.

You can specify either a single S3 location or an array of up to 10 S3 locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#input_params CloudformationGuardHook#input_params}

---

### CloudformationGuardHookRuleLocation <a name="CloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookRuleLocation {
	Uri: *string,
	VersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri">Uri</a></code> | <code>*string</code> | S3 uri of Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId">VersionId</a></code> | <code>*string</code> | S3 object version. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

S3 uri of Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#uri CloudformationGuardHook#uri}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

S3 object version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#version_id CloudformationGuardHook#version_id}

---

### CloudformationGuardHookStackFilters <a name="CloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookStackFilters {
	FilteringCriteria: *string,
	StackNames: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames,
	StackRoles: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria">FilteringCriteria</a></code> | <code>*string</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames">StackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles">StackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `FilteringCriteria`<sup>Optional</sup> <a name="FilteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria"></a>

```go
FilteringCriteria *string
```

- *Type:* *string

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#filtering_criteria CloudformationGuardHook#filtering_criteria}

---

##### `StackNames`<sup>Optional</sup> <a name="StackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames"></a>

```go
StackNames CloudformationGuardHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_names CloudformationGuardHook#stack_names}

---

##### `StackRoles`<sup>Optional</sup> <a name="StackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles"></a>

```go
StackRoles CloudformationGuardHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_roles CloudformationGuardHook#stack_roles}

---

### CloudformationGuardHookStackFiltersStackNames <a name="CloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookStackFiltersStackNames {
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude">Exclude</a></code> | <code>*[]*string</code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include">Include</a></code> | <code>*[]*string</code> | List of stack names that the hook is going to target. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookStackFiltersStackRoles <a name="CloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookStackFiltersStackRoles {
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude">Exclude</a></code> | <code>*[]*string</code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include">Include</a></code> | <code>*[]*string</code> | List of stack roles that the hook is going to target. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookTargetFilters <a name="CloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookTargetFilters {
	Actions: *[]*string,
	InvocationPoints: *[]*string,
	TargetNames: *[]*string,
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions">Actions</a></code> | <code>*[]*string</code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints">InvocationPoints</a></code> | <code>*[]*string</code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames">TargetNames</a></code> | <code>*[]*string</code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets">Targets</a></code> | <code>interface{}</code> | List of hook targets. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#actions CloudformationGuardHook#actions}

---

##### `InvocationPoints`<sup>Optional</sup> <a name="InvocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints"></a>

```go
InvocationPoints *[]*string
```

- *Type:* *[]*string

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#invocation_points CloudformationGuardHook#invocation_points}

---

##### `TargetNames`<sup>Optional</sup> <a name="TargetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames"></a>

```go
TargetNames *[]*string
```

- *Type:* *[]*string

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_names CloudformationGuardHook#target_names}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#targets CloudformationGuardHook#targets}

---

### CloudformationGuardHookTargetFiltersTargets <a name="CloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

&cloudformationguardhook.CloudformationGuardHookTargetFiltersTargets {
	Action: *string,
	InvocationPoint: *string,
	TargetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action">Action</a></code> | <code>*string</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint">InvocationPoint</a></code> | <code>*string</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName">TargetName</a></code> | <code>*string</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action"></a>

```go
Action *string
```

- *Type:* *string

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#action CloudformationGuardHook#action}

---

##### `InvocationPoint`<sup>Optional</sup> <a name="InvocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint"></a>

```go
InvocationPoint *string
```

- *Type:* *string

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#invocation_point CloudformationGuardHook#invocation_point}

---

##### `TargetName`<sup>Optional</sup> <a name="TargetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName"></a>

```go
TargetName *string
```

- *Type:* *string

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_name CloudformationGuardHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGuardHookOptionsOutputReference <a name="CloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGuardHookOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams">ResetInputParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputParams` <a name="ResetInputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams"></a>

```go
func ResetInputParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput">InputParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams">InputParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputParamsInput`<sup>Optional</sup> <a name="InputParamsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput"></a>

```go
func InputParamsInput() *string
```

- *Type:* *string

---

##### `InputParams`<sup>Required</sup> <a name="InputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```go
func InputParams() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookRuleLocationOutputReference <a name="CloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookRuleLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGuardHookRuleLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId"></a>

```go
func ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookStackFiltersOutputReference <a name="CloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookStackFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGuardHookStackFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames">PutStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles">PutStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria">ResetFilteringCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames">ResetStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles">ResetStackRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStackNames` <a name="PutStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames"></a>

```go
func PutStackNames(value CloudformationGuardHookStackFiltersStackNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---

##### `PutStackRoles` <a name="PutStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles"></a>

```go
func PutStackRoles(value CloudformationGuardHookStackFiltersStackRoles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---

##### `ResetFilteringCriteria` <a name="ResetFilteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```go
func ResetFilteringCriteria()
```

##### `ResetStackNames` <a name="ResetStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames"></a>

```go
func ResetStackNames()
```

##### `ResetStackRoles` <a name="ResetStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles"></a>

```go
func ResetStackRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames">StackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles">StackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput">FilteringCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput">StackNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput">StackRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">FilteringCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```go
func StackNames() CloudformationGuardHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `StackRoles`<sup>Required</sup> <a name="StackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```go
func StackRoles() CloudformationGuardHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `FilteringCriteriaInput`<sup>Optional</sup> <a name="FilteringCriteriaInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```go
func FilteringCriteriaInput() *string
```

- *Type:* *string

---

##### `StackNamesInput`<sup>Optional</sup> <a name="StackNamesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput"></a>

```go
func StackNamesInput() interface{}
```

- *Type:* interface{}

---

##### `StackRolesInput`<sup>Optional</sup> <a name="StackRolesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput"></a>

```go
func StackRolesInput() interface{}
```

- *Type:* interface{}

---

##### `FilteringCriteria`<sup>Required</sup> <a name="FilteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```go
func FilteringCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookStackFiltersStackNamesOutputReference <a name="CloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookStackFiltersStackNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGuardHookStackFiltersStackNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookStackFiltersStackRolesOutputReference <a name="CloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookStackFiltersStackRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGuardHookStackFiltersStackRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookTargetFiltersOutputReference <a name="CloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookTargetFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationGuardHookTargetFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints">ResetInvocationPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames">ResetTargetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetInvocationPoints` <a name="ResetInvocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```go
func ResetInvocationPoints()
```

##### `ResetTargetNames` <a name="ResetTargetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames"></a>

```go
func ResetTargetNames()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets"></a>

```go
func ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput">InvocationPointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput">TargetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">InvocationPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames">TargetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```go
func Targets() CloudformationGuardHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InvocationPointsInput`<sup>Optional</sup> <a name="InvocationPointsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```go
func InvocationPointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNamesInput`<sup>Optional</sup> <a name="TargetNamesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```go
func TargetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InvocationPoints`<sup>Required</sup> <a name="InvocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```go
func InvocationPoints() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNames`<sup>Required</sup> <a name="TargetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```go
func TargetNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookTargetFiltersTargetsList <a name="CloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookTargetFiltersTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudformationGuardHookTargetFiltersTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get"></a>

```go
func Get(index *f64) CloudformationGuardHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudformationGuardHookTargetFiltersTargetsOutputReference <a name="CloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationguardhook"

cloudformationguardhook.NewCloudformationGuardHookTargetFiltersTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudformationGuardHookTargetFiltersTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint">ResetInvocationPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName">ResetTargetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetInvocationPoint` <a name="ResetInvocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```go
func ResetInvocationPoint()
```

##### `ResetTargetName` <a name="ResetTargetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```go
func ResetTargetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput">InvocationPointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput">TargetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">InvocationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `InvocationPointInput`<sup>Optional</sup> <a name="InvocationPointInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```go
func InvocationPointInput() *string
```

- *Type:* *string

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```go
func TargetNameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InvocationPoint`<sup>Required</sup> <a name="InvocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```go
func InvocationPoint() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



